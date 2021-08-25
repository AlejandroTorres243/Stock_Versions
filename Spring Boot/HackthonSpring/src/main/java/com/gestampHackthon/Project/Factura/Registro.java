package com.gestampHackthon.Project.Factura;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@Document(collection = "Factura")
public class Registro {

    private Region
    private Country
    private ItemType
    private SalesChannel
    private OrderPriority
    private OrderDate
    private OrderID
    private ShipDate
    private UnitsSold
    private UnitPrice
    private UnitCost
    private TotalRevenue
    private TotalCost
    private TotalProfit

}
