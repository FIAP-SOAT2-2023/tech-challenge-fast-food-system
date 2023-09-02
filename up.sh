echo "INICIANDO"

echo "DB - Configurador"
kubectl apply -f ./kubernetes/db-configmap.yaml

echo "Banco de Dados - POD"
kubectl apply -f ./kubernetes/fast-food-db-pod.yaml

echo "Banco de Dados - SVC"
kubectl apply -f ./kubernetes/fast-food-db-svc.yaml


echo "INICIALIZANDO A APLICAÇÃO"

echo "APP - Configurador"
kubectl apply -f ./kubernetes/app-configmap.yaml

echo "APP - POD"
kubectl apply -f ./kubernetes/fast-food-app-pod.yaml

echo "APP - SVC"
kubectl apply -f ./kubernetes/fast-food-app-svc.yaml

echo "CONCLUIDO!"