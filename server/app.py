from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import subprocess
import os
import re

app = Flask(__name__)
CORS(app)

FFMPEG_PATH = r"C:\Users\Kashish\OneDrive\Desktop\ffmpeg-8.0.1-essentials_build\bin\ffmpeg.exe"
HLS_DIR = "hls"
ffmpeg_process = None


os.makedirs(HLS_DIR, exist_ok=True)

def is_valid_rtsp(url):
    return re.match(r"^rtsp://", url)
@app.route("/start-stream", methods=["POST"])
def start_stream():
    global ffmpeg_process

    data = request.json
    rtsp_url = data.get("rtspUrl")

    if not rtsp_url or not is_valid_rtsp(rtsp_url):
        return jsonify({"success": False, "error": "Invalid RTSP URL"}), 400

    # 🔴 STOP PREVIOUS STREAM
    if ffmpeg_process:
        ffmpeg_process.kill()
        ffmpeg_process = None

    output_path = os.path.join("hls", "stream.m3u8")

    command = [
        FFMPEG_PATH,
        "-rtsp_transport", "tcp",
        "-i", rtsp_url,
        "-c:v", "copy",
        "-c:a", "aac",
        "-f", "hls",
        "-hls_time", "2",
        "-hls_list_size", "5",
        "-hls_flags", "delete_segments",
        output_path
    ]

    ffmpeg_process = subprocess.Popen(command)

    return jsonify({
        "success": True,
        "hlsUrl": "http://localhost:5000/hls/stream.m3u8"
    })

# @app.route("/start-stream", methods=["POST"])
# def start_stream():
#     data = request.json
#     rtsp_url = data.get("rtspUrl")

#     if not rtsp_url or not is_valid_rtsp(rtsp_url):
#         return jsonify({"success": False, "error": "Invalid RTSP URL"}), 400

#     output_path = os.path.join(HLS_DIR, "stream.m3u8")

#     command = [
#         FFMPEG_PATH,
#         "-rtsp_transport", "tcp",
#         "-i", rtsp_url,
#         "-c:v", "copy",
#         "-c:a", "aac",
#         "-f", "hls",
#         "-hls_time", "2",
#         "-hls_list_size", "3",
#         "-hls_flags", "delete_segments",
#         output_path
#     ]

#     subprocess.Popen(command)

#     return jsonify({
#         "success": True,
#         "hlsUrl": "http://localhost:5000/hls/stream.m3u8"
#     })

@app.route("/hls/<path:filename>")
def serve_hls(filename):
    return send_from_directory(HLS_DIR, filename)

if __name__ == "__main__":
    app.run(debug=True)
