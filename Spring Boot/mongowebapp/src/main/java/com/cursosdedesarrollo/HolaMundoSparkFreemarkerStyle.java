package com.cursosdedesarrollo;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import freemarker.template.Configuration;
import freemarker.template.Template;
import org.bson.Document;
import spark.Spark;

import java.io.StringWriter;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import static spark.Spark.get;
import static spark.Spark.halt;
import static spark.Spark.post;

/**
 * Created by pepesan on 26/3/15.
 */
public class HolaMundoSparkFreemarkerStyle {
    public static void main(String[] args) {
        Configuration configuration= new Configuration();
        configuration.setClassForTemplateLoading(HolaMundoSparkFreemarkerStyle.class, "/");
        try {
            get("/",(request, response) -> {
                Template plantilla = configuration.getTemplate("home.ftl");
                StringWriter writer = new StringWriter();
                Map<String, Object> map = new HashMap<String, Object>();
                plantilla.process(map, writer);
                return writer;
            });
            get("/hello", (req, res) -> {
                Template plantilla = configuration.getTemplate("hello.ftl");
                StringWriter writer = new StringWriter();
                Map<String, Object> map = new HashMap<String, Object>();
                map.put("nombre", "Pepe");
                plantilla.process(map, writer);
                return writer;
            });
            get("/listado",(request, response) -> {
                MongoClient client=new MongoClient("localhost",27017);
                MongoDatabase database= (MongoDatabase) client.getDatabase("test");
                MongoCollection coleccion=database.getCollection("autor");
                Document objeto= (Document) coleccion.find().first();
                Template plantilla = configuration.getTemplate("listado.ftl");
                StringWriter writer = new StringWriter();
                Map<String, Object> map = new HashMap<String, Object>();
                map.put("objeto", objeto);
                plantilla.process(map, writer);
                return writer;
            });
            get("/form", (request, response) -> {
                Template plantilla = configuration.getTemplate("frutas.ftl");
                StringWriter writer = new StringWriter();
                Map<String, Object> map = new HashMap<String, Object>();
                map.put("frutas", Arrays.asList("Manzana","Pera", "Plátano","Naranja"));
                plantilla.process(map, writer);
                return writer;
            });
            post("/fruta_elegida",(request, response) ->{
                Template plantilla = configuration.getTemplate("frutas-resultado.ftl");
                StringWriter writer = new StringWriter();
                Map<String, Object> map = new HashMap<String, Object>();
                map.put("fruta", request.queryParams("fruta"));
                plantilla.process(map, writer);
                return writer;
            });
        } catch (Exception e) {
            halt(500);
            e.printStackTrace();
        }

    }
}
