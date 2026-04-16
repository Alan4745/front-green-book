#!/usr/bin/env bash

# Uso: bash scripts/generate-hls.sh ruta/al/video.mp4 nombre-salida
# Ejemplo: bash scripts/generate-hls.sh src/assets/Colab/Videos/AC.mp4 AC

INPUT="${1}"
NAME="${2}"
OUT_DIR="public/videos/${NAME}"

if [ -z "$INPUT" ] || [ -z "$NAME" ]; then
  echo "Uso: bash scripts/generate-hls.sh <input.mp4> <nombre>"
  exit 1
fi

mkdir -p "${OUT_DIR}/360p"
mkdir -p "${OUT_DIR}/480p"
mkdir -p "${OUT_DIR}/720p"
mkdir -p "${OUT_DIR}/1080p"

echo "→ Procesando: ${INPUT}"
echo "→ Salida en:  ${OUT_DIR}/"

ffmpeg -i "${INPUT}" \
  -filter_complex "[0:v]split=4[v1][v2][v3][v4]" \
  -map "[v1]" -map 0:a -vf "scale=640:360" -c:v libx264 -profile:v baseline -level 3.0 \
    -b:v 500k -maxrate 550k -bufsize 1000k -c:a aac -b:a 64k \
    -hls_time 6 -hls_playlist_type vod \
    -hls_segment_filename "${OUT_DIR}/360p/seg%03d.ts" \
    "${OUT_DIR}/360p/index.m3u8" \
  -map "[v2]" -map 0:a -vf "scale=854:480" -c:v libx264 -profile:v main -level 3.0 \
    -b:v 1000k -maxrate 1100k -bufsize 2000k -c:a aac -b:a 96k \
    -hls_time 6 -hls_playlist_type vod \
    -hls_segment_filename "${OUT_DIR}/480p/seg%03d.ts" \
    "${OUT_DIR}/480p/index.m3u8" \
  -map "[v3]" -map 0:a -vf "scale=1280:720" -c:v libx264 -profile:v main -level 3.1 \
    -b:v 2500k -maxrate 2750k -bufsize 5000k -c:a aac -b:a 128k \
    -hls_time 6 -hls_playlist_type vod \
    -hls_segment_filename "${OUT_DIR}/720p/seg%03d.ts" \
    "${OUT_DIR}/720p/index.m3u8" \
  -map "[v4]" -map 0:a -vf "scale=1920:1080" -c:v libx264 -profile:v high -level 4.0 \
    -b:v 5000k -maxrate 5500k -bufsize 10000k -c:a aac -b:a 192k \
    -hls_time 6 -hls_playlist_type vod \
    -hls_segment_filename "${OUT_DIR}/1080p/seg%03d.ts" \
    "${OUT_DIR}/1080p/index.m3u8"

cat > "${OUT_DIR}/master.m3u8" <<EOF
#EXTM3U
#EXT-X-VERSION:3

#EXT-X-STREAM-INF:BANDWIDTH=564000,RESOLUTION=640x360,CODECS="avc1.42e00a,mp4a.40.2"
360p/index.m3u8

#EXT-X-STREAM-INF:BANDWIDTH=1096000,RESOLUTION=854x480,CODECS="avc1.4d400f,mp4a.40.2"
480p/index.m3u8

#EXT-X-STREAM-INF:BANDWIDTH=2628000,RESOLUTION=1280x720,CODECS="avc1.4d401f,mp4a.40.2"
720p/index.m3u8

#EXT-X-STREAM-INF:BANDWIDTH=5192000,RESOLUTION=1920x1080,CODECS="avc1.640028,mp4a.40.2"
1080p/index.m3u8
EOF

echo ""
echo "✓ HLS generado en ${OUT_DIR}/"
echo "✓ Playlist maestro: ${OUT_DIR}/master.m3u8"
echo ""
echo "En tu componente usa: hlsSrc=\"/videos/${NAME}/master.m3u8\""
