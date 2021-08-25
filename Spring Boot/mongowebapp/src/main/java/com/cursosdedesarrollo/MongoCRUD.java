package com.cursosdedesarrollo;

import com.mongodb.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
import org.bson.Document;
import static com.mongodb.client.model.Filters.*;
import static com.mongodb.client.model.Sorts.*;
import static com.mongodb.client.model.Projections.*;


import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by pepesan on 24/5/15.
 */
public class MongoCRUD {
    public static void main(String[] args) throws UnknownHostException {



        MongoClient mongo = new MongoClient("localhost", 27017);
        MongoDatabase db = mongo.getDatabase("journaldev");

        MongoCollection collection = db.getCollection("users");

        //create user
        User user = createUser();
        Document doc = createUserDocument(user);
        collection.insertOne(doc);

        MongoCollection col = db.getCollection("numbers");

        //insert many documents
        List<Document> documents = new ArrayList<Document>();
        for (int i = 0; i < 100; i++) {
            documents.add(new Document("i", i));
        }
        col.insertMany(documents);
        //count in collection
        System.out.println(col.count());

        //find first
        Document myDoc = (Document) col.find().first();
        System.out.println(myDoc.toJson());
        //cursores
        MongoCursor<Document> cursor = col.find().iterator();
        try {
            while (cursor.hasNext()) {
                System.out.println(cursor.next().toJson());
            }
        } finally {
            cursor.close();
        }

        //create index
        col.createIndex(new Document("i", 1));

        //read example
        myDoc = (Document)col.find(eq("i", 71)).first();
        System.out.println(myDoc.toJson());

        // now use a range query to get a larger subset
        Block<Document> printBlock = new Block<Document>() {
            @Override
            public void apply(final Document document) {
                System.out.println(document.toJson());
            }
        };
        col.find(gt("i", 50)).forEach(printBlock);

        col.find(and(gt("i", 50), lte("i", 100))).forEach(printBlock);

        //sorting
        myDoc = (Document)col.find(exists("i")).sort(descending("i")).first();
        System.out.println(myDoc.toJson());
        //projections
        myDoc = (Document)col.find().projection(excludeId()).first();
        System.out.println(myDoc.toJson());


        //update example
        col .updateOne(eq("i", 10), new Document("$set", new Document("i", 110)));

        //update multiple
        UpdateResult updateResult = col.updateMany(lt("i", 100),
                new Document("$inc", new Document("i", 100)));
        System.out.println(updateResult.getModifiedCount());


        //delete example
        col.deleteOne(eq("i", 110));

        //delete multiple
        DeleteResult deleteResult = col.deleteMany(gte("i", 100));
        System.out.println(deleteResult.getDeletedCount());


        //drop collection
        col.drop();
        collection.drop();
        //drop database
        mongo.getDatabase("journaldev").drop();


        //close resources
        mongo.close();
    }

    private static Document createUserDocument(User user) {
        Document doc = new Document("name", user.getName())
                .append("role", user.getRole())
                .append("id", user.getId())
                .append("employee",user.isEmployee());
        return doc;
    }

    private static User createUser() {
        User u = new User();
        u.setId(2);
        u.setName("Pankaj");
        u.setEmployee(true);
        u.setRole("CEO");
        return u;
    }
}
