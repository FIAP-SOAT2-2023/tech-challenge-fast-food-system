docker build linux/amd64 -t fastfoodsystem ../
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 914643601265.dkr.ecr.us-east-1.amazonaws.com
docker tag fastfoodsystem:latest 914643601265.dkr.ecr.us-east-1.amazonaws.com/fastfoodsystem:latest
docker push 914643601265.dkr.ecr.us-east-1.amazonaws.com/fastfoodsystem:latest