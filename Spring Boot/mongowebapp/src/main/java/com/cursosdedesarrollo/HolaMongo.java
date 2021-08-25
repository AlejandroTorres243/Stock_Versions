package com.cursosdedesarrollo;



import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

/**
 * Created by pepesan on 23/5/15.
 */
public class HolaMongo {
    public static void main(String[] args) {
        MongoClient client=new MongoClient("localhost",27017);
        MongoDatabase database= (MongoDatabase) client.getDatabase("test");
        MongoCollection coleccion=database.getCollection("autor");
        Document objeto= (Document) coleccion.find().first();
        System.out.println(objeto);
        System.out.println(objeto.getObjectId("_id"));
        System.out.println(objeto.get("nombre"));


    }
}
