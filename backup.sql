-- MySQL dump 10.13  Distrib 8.0.37, for Win64 (x86_64)
--
-- Host: localhost    Database: apphoelaria
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adicionais`
--

DROP TABLE IF EXISTS `adicionais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adicionais` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `preco` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adicionais`
--

LOCK TABLES `adicionais` WRITE;
/*!40000 ALTER TABLE `adicionais` DISABLE KEYS */;
INSERT INTO `adicionais` VALUES (1,'Serviço de Quarto',45);
/*!40000 ALTER TABLE `adicionais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cargos`
--

DROP TABLE IF EXISTS `cargos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cargos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargos`
--

LOCK TABLES `cargos` WRITE;
/*!40000 ALTER TABLE `cargos` DISABLE KEYS */;
INSERT INTO `cargos` VALUES (1,'Funcionario'),(2,'Jardineiro'),(3,'cliente');
/*!40000 ALTER TABLE `cargos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `cpf` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(250) DEFAULT NULL,
  `cargo_id` int(11) DEFAULT 3,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `cargo_id` (`cargo_id`),
  CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`cargo_id`) REFERENCES `cargos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Leonardo','123-456-678-99','15-98818-8424','leonardo@gmail.com',NULL,NULL),(2,'luiz','11000-11001-1010','15-98810-9821','luiz@gmail.com','$2y$10$zWKhdyBT9Qn5d8lQNxD7i.QFLuF44Vs96fLeIxksaz2E7ulSZCXhi',2),(9,'leonardo','35456778901','15-99122-8196','leonardo@example.com','$2b$10$mRNWug9aklMl6C5d6FnMBuX182VrEOpBSNSLU9h/yC8755PqHxjWi',2),(12,'kevin','12345678900','15-99887766','kevin@example.com','$2b$10$sh40LZlsoWHYH3kzUaMYOuWK7mJqOXt1vCqTk.E7Jscra4lpSLOCi',3),(14,'jujudopix','12345678900','15-99887766','jujudopix@example.com','$2b$10$XhoxSXtPpegJ1rryuiDGdO7NuySDNG2jFcfYDEOrxQVBXmb2fJLYO',3),(20,'Chorão','12345678900','15-99887766','Chorão@example.com','$2b$10$koR2rKcnW/5EsgMOSXzCQebWIcWl56fhjfopxUHOKReMvVE.sGSkW',3),(26,'Juan','12345678900','15-99887766','juan@example.com','$2b$10$Cgv/LmeaTJSAK135TD9jxuAbVNx2/Fql77lO7s63ugbjDsBPZPWDm',3),(40,'Dalmo','12345678900','15-99887766','Dalmo@example.com','$2b$10$ChDKhyEWFkSdgYptOM/S2.pqUQ2fR7lJkIhhumqJPe4oCM2u13aFy',3),(102,'Maria','24225252525','15-2441414141','Maria@example.com','$2b$10$7D1fsZSyLcs5rKS.MXjcxOGjP3DFV/X9YQczWIwVLcndNn6x/4j2e',3),(130,'nomeTeste','123456789-55','157070-7070','teste@email.com','$2b$10$3stz3Q2XV2yutmmfjtg0buPzmykUryEKhqwwchdViIy6cK2C6eXHa',2),(134,'Braga','123456789-55','157070-7070','braga@email.com','$2b$10$Dq.Gm2oykUMiMP/wW.wYZ.QcJPdb5Iw4vv9hYsCtoHHvoEsYwZPmy',2);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foto`
--

DROP TABLE IF EXISTS `foto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imagem_id` int(11) DEFAULT NULL,
  `quarto_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `imagem_id` (`imagem_id`),
  KEY `quarto_id` (`quarto_id`),
  CONSTRAINT `foto_ibfk_1` FOREIGN KEY (`imagem_id`) REFERENCES `imagens` (`id`),
  CONSTRAINT `foto_ibfk_2` FOREIGN KEY (`quarto_id`) REFERENCES `quartos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foto`
--

LOCK TABLES `foto` WRITE;
/*!40000 ALTER TABLE `foto` DISABLE KEYS */;
/*!40000 ALTER TABLE `foto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagens`
--

DROP TABLE IF EXISTS `imagens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `caminho` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagens`
--

LOCK TABLES `imagens` WRITE;
/*!40000 ALTER TABLE `imagens` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  `cliente_id` int(11) DEFAULT NULL,
  `data` data NOT NULL DEFAULT {CURRENT_DATE},
  `pagamento` enum('Cartão','Dinheiro','Pix') DEFAULT 'Cartão',
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `cliente_id` (`cliente_id`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,1,1,'2025-10-02 17:11:24','Cartão'),(6,NULL,14,'2026-02-25 18:37:38','Cartão'),(7,NULL,14,'2026-02-25 18:39:08','Cartão'),(8,NULL,14,'2026-02-25 18:39:12','Cartão'),(9,NULL,14,'2026-02-25 18:39:26','Cartão'),(10,NULL,14,'2026-02-25 18:39:53','Cartão'),(11,NULL,14,'2026-02-25 18:39:57','Cartão'),(12,NULL,14,'2026-02-25 18:41:58','Cartão'),(13,NULL,14,'2026-02-25 18:42:02','Cartão'),(14,NULL,14,'2026-02-25 19:08:42','Cartão'),(15,NULL,14,'2026-02-26 17:00:22','Cartão'),(16,NULL,14,'2026-02-26 17:16:12','Cartão'),(17,NULL,14,'2026-02-26 17:16:20','Cartão');
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quartos`
--

DROP TABLE IF EXISTS `quartos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quartos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `numero` varchar(255) NOT NULL,
  `qtd_cama_casal` int(11) NOT NULL,
  `qtd_cama_solteiro` int(11) NOT NULL,
  `preco` double NOT NULL,
  `disponivel` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quartos`
--

LOCK TABLES `quartos` WRITE;
/*!40000 ALTER TABLE `quartos` DISABLE KEYS */;
INSERT INTO `quartos` VALUES (1,'quarto ao luar','154',2,1,399,1),(11,'quarto a luz de velas','119',1,0,499,1),(12,'quarto a luz do luar ','120',2,1,0,1),(13,'quarto Blue','132',2,1,499,1);
/*!40000 ALTER TABLE `quartos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservas`
--

DROP TABLE IF EXISTS `reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pedido_id` int(11) DEFAULT NULL,
  `quarto_id` int(11) DEFAULT NULL,
  `adicional_id` int(11) DEFAULT NULL,
  `fim` timestamp NOT NULL DEFAULT current_timestamp(),
  `inicio` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `pedido_id` (`pedido_id`),
  KEY `quarto_id` (`quarto_id`),
  KEY `adicional_id` (`adicional_id`),
  CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`quarto_id`) REFERENCES `quartos` (`id`),
  CONSTRAINT `reservas_ibfk_3` FOREIGN KEY (`adicional_id`) REFERENCES `adicionais` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservas`
--

LOCK TABLES `reservas` WRITE;
/*!40000 ALTER TABLE `reservas` DISABLE KEYS */;
INSERT INTO `reservas` VALUES (3,1,11,1,'2025-09-28 03:00:00','2025-10-06 17:17:25'),(4,11,1,NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(5,12,1,NULL,'2026-02-19 17:00:00','0000-00-00 00:00:00'),(6,13,1,NULL,'2026-02-19 17:00:00','2026-02-20 15:00:00'),(7,14,1,NULL,'2026-02-19 17:00:00','2026-02-20 15:00:00'),(8,15,1,NULL,'2026-02-25 17:00:00','2026-02-20 15:00:00'),(9,16,1,NULL,'2026-02-25 17:00:00','2026-02-20 15:00:00'),(10,17,1,NULL,'2026-02-25 17:00:00','2026-02-20 15:00:00');
/*!40000 ALTER TABLE `reservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `cargo_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cargo_id` (`cargo_id`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`cargo_id`) REFERENCES `cargos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Leonardo','Leonardo@gmail.com','$2y$10$93fo.WCZNrVv7oZSzY7xOukrYiMeiYZ/GCdY7nPRYKHLC7epsfxiK',1),(2,'shinobu','kukishinobu92@gmail.com','$2y$10$XgZyLpnwCEVhpMSzckA8AO0bdYgT0Ru.h6nizT3RrB.dBFij.Pbay',1),(3,'jujudopix','jujudopix@gmail.com','$2y$10$LjmCG41DTcut7F1DIBR5mOUvdWBAAhQu0TEazQTajpgTECfxFAa1e',1),(6,'leonardo2','leonardo2@gmail.com','$2y$10$LjmCG41DTcut7F1DIBR5mOUvdWBAAhQu0TEazQTajpgTECfxFAa1e',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-26 16:36:30
