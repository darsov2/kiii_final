package mk.ukim.finki.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurer;

@SpringBootApplication
public class ApiGatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
    }

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("feedbacks-service-route", r -> r
                        .path("/api/feedback/**")
                        .uri("http://feedback:8081"))
                .route("mailing-service-route", r -> r
                        .path("/api/email/**")
                        .uri("http://mailing:8082"))
                .route("main-app-routes", r -> r
                        .path("/**")
                        .uri("http://main-app:8083"))
                .build();
    }

    @Bean
    public GlobalCorsConfig globalCorsConfig() {
        return new GlobalCorsConfig();
    }

    private static class GlobalCorsConfig implements WebFluxConfigurer {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**")
                    .allowedOrigins("http://localhost:3000")
                    .allowedMethods("GET", "POST", "PUT", "DELETE");
        }
    }

}
