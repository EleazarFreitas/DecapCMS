FROM alpine:latest

# Instala dependências básicas
RUN apk add --no-cache \
    unzip \
    ca-certificates

# Define a versão do PocketBase
ARG PB_VERSION=0.36.8

# Baixa o PocketBase para Linux (AMD64)
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# Expõe a porta padrão da Koyeb para health check
EXPOSE 8000

# Inicia o PocketBase
# Mudamos para a porta 8000 para alinhar com o health check padrão da Koyeb
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8000", "--dir=/pb/pb_data"]