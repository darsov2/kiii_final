sudo k3d cluster create test-kiii -p "80:80@loadbalancer" -a 2
sudo kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/cloud/deploy.yaml
sudo kubectl apply -f namespace.yaml
sudo kubectl apply -f secrets.yaml
sudo kubectl apply -f app-config.yaml
sudo kubectl apply -f postgres-pv.yaml
sudo kubectl apply -f ps-deployment.yaml
sudo kubectl apply -f api-gateway.yaml
sudo kubectl apply -f main-app.yaml
sudo kubectl apply -f feedback.yaml
sudo kubectl apply -f frontend.yaml
sudo kubectl apply -f services.yaml