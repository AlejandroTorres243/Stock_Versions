package com.cursosdedesarrollo;

import freemarker.template.Configuration;
import freemarker.template.Template;

import java.io.IOException;
import java.io.StringWriter;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by pepesan on 26/3/15.
 */
public class HolaMundoFreemarkerStyle {
    public static void main(String[] args) {
        Configuration configuration= new Configuration();
        configuration.setClassForTemplateLoading(HolaMundoFreemarkerStyle.class,"/");
        try {
            Template plantilla=configuration.getTemplate("hello.ftl");
            StringWriter writer= new StringWriter();
            Map<String,Object> map=new HashMap<String, Object>();
            map.put("nombre","Pepe");
            plantilla.process(map,writer);
            System.out.println(writer);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
