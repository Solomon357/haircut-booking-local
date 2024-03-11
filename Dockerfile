FROM maven:3-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests
# change to "haircut-bookings" if this doesn't work
FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/haircutbookings-0.0.1-SNAPSHOT.jar haircutbookings.jar
#i think this just says once its built i will run on port 8080 of whatever machine its on
EXPOSE 8080
ENTRYPOINT [ "java","-jar","haircutbookings.jar" ]