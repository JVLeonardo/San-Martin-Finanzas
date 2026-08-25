FROM maven:3.9.11-eclipse-temurin-21

WORKDIR /workspace

RUN apt-get update \
    && apt-get install --no-install-recommends --yes curl \
    && rm -rf /var/lib/apt/lists/*

COPY . .

EXPOSE 8080

CMD ["sh", "-c", "chmod +x mvnw && ./mvnw spring-boot:run"]
