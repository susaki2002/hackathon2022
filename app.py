from flask import Flask, render_template, request
import os
import json
import io

data = {'response':'success!'}

app = Flask(__name__)
print('a')

@app.route('/', methods=['POST'])
def send():
    comment = request.data['key']
    res = json.dumps(data)
    mem = io.BytesIO()
    mem.write( res.encode('utf-8'))
    mem.seek(0) # 先頭に戻す

    ret = send_file( mem, mimetype='application/json', as_attachment=True, attachment_filename='hoge.json')
    return ret

if __name__ == '__main__':
    app.run(debug=True)