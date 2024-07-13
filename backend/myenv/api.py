# app.py
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS, cross_origin
from check_spf_dmarc import check_spf, check_dmarc
import os   

app = Flask(__name__)
CORS(app)

@app.route('/api/check_records', methods=['POST'])

def check_records():
    data = request.json
    domains = data.get('domains')
    if not domains or not isinstance(domains, list):
        return jsonify({'error': 'No domains provided or invalid format'}), 400
    
    results = []
    for domain in domains:
        spf_record = check_spf(domain)
        dmarc_record = check_dmarc(domain)
        results.append({
            'domain': domain,
            'spf_record': spf_record,
            'dmarc_record': dmarc_record
            
        })
    
    return jsonify(results)

frontend_folder = os.path.join(os.getcwd(), "..", "frontend") 
build_folder = os.path.join(frontend_folder,"build")

# Server static files from the "dist" folder under the "frontend" directory

@app.route("/",defaults={"filenale":""})
@app.route("/<path:filename>")
def index(filename):
    if not filename:
        filename = "index.html"
    return send_from_directory(build_folder,filenamed)


if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Change port to 5001

