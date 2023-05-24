docker build -t sagex/nodejs_lambda .

docker run -p 9000:8080 sagex/nodejs_lambda
