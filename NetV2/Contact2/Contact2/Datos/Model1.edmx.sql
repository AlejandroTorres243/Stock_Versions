
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 11/11/2019 16:10:01
-- Generated from EDMX file: C:\Users\AlumnoGTI\source\repos\Contact2\Contact2\Datos\Model1.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [ConversorDb];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------


-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Monedas'
CREATE TABLE [dbo].[Monedas] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [TipoMoneda] nvarchar(max)  NOT NULL,
    [Nombre] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Factores'
CREATE TABLE [dbo].[Factores] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [MonedaOrigen_Id] int  NOT NULL,
    [MonedaDestino_Id] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Monedas'
ALTER TABLE [dbo].[Monedas]
ADD CONSTRAINT [PK_Monedas]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Factores'
ALTER TABLE [dbo].[Factores]
ADD CONSTRAINT [PK_Factores]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [MonedaOrigen_Id] in table 'Factores'
ALTER TABLE [dbo].[Factores]
ADD CONSTRAINT [FK_MonedaFactor]
    FOREIGN KEY ([MonedaOrigen_Id])
    REFERENCES [dbo].[Monedas]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_MonedaFactor'
CREATE INDEX [IX_FK_MonedaFactor]
ON [dbo].[Factores]
    ([MonedaOrigen_Id]);
GO

-- Creating foreign key on [MonedaDestino_Id] in table 'Factores'
ALTER TABLE [dbo].[Factores]
ADD CONSTRAINT [FK_MonedaFactor1]
    FOREIGN KEY ([MonedaDestino_Id])
    REFERENCES [dbo].[Monedas]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_MonedaFactor1'
CREATE INDEX [IX_FK_MonedaFactor1]
ON [dbo].[Factores]
    ([MonedaDestino_Id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------