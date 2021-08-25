package com.cursosdedesarrollo;


import static spark.Spark.*;

/**
 * Created by pepesan on 26/3/15.
 */
public class HolaMundoSparkStyle {
    public static void main(String[] args) {
        get("/hello", (req, res) -> "Hello World");
    }
}
