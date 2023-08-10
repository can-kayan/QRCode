# QRCode
 qrCode web site 
 {
	"info": {
		"_postman_id": "bdbdfcf0-4827-4e9d-8e17-97758726b363",
		"name": "QRCode",
		"description": "web site application",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "23652874"
	},
	"item": [
		{
			"name": "Admin",
			"item": [
				{
					"name": "Banner",
					"item": [
						{
							"name": "GetBanner",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/Banner",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"Banner"
									]
								}
							},
							"response": []
						},
						{
							"name": "postBanner",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"title\":\"predict\",\r\n    \"description\":\"it'a predict\",\r\n    \"image\":\"64d3e07f68b84cedb0dc8fd0\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/new=Banner",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"new=Banner"
									]
								}
							},
							"response": []
						},
						{
							"name": "putBanner",
							"request": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"title\":\"predicts\",\r\n    \"description\":\"it'a predicts\",\r\n    \"image\":\"64d3e07f68b84cedb0dc8fd0\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/update=Banner",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"update=Banner"
									]
								}
							},
							"response": []
						},
						{
							"name": "deleteBanner",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/del=Banner?_id=64d3e1039fe0b788c89bff4e",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"del=Banner"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d3e1039fe0b788c89bff4e"
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "ContactUs",
					"item": [
						{
							"name": "getContactUs",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/ContactUs",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"ContactUs"
									]
								}
							},
							"response": []
						},
						{
							"name": "postContactUs",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"phone\":\"02660101010\",\r\n    \"address\":\"balıkesir\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/new=ContactUs",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"new=ContactUs"
									]
								}
							},
							"response": []
						},
						{
							"name": "putContactUs",
							"request": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"phone\":\"02660101010\",\r\n    \"address\":\"balıkesins\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/update=ContactUs",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"update=ContactUs"
									]
								}
							},
							"response": []
						},
						{
							"name": "deleteContactUs",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/del=ContactUs?_id=64d3e538e4be832f1d776d09",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"del=ContactUs"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d3e538e4be832f1d776d09"
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "Image",
					"item": [
						{
							"name": "postımage",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"path\":\"/desktop/image.jpg\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/new=Image",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"new=Image"
									]
								}
							},
							"response": []
						},
						{
							"name": "getImage",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/Image",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"Image"
									]
								}
							},
							"response": []
						},
						{
							"name": "putImage",
							"request": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"path\":\"/desktop/image.jpgs\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/update=Image",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"update=Image"
									]
								}
							},
							"response": []
						},
						{
							"name": "deleteImage",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/del=Image?_id=64d3e07f68b84cedb0dc8fd0",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"del=Image"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d3e07f68b84cedb0dc8fd0"
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "Orders",
					"item": [
						{
							"name": "postOrders",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"tableNumber\":\"1\",\r\n    \"orderInformation\":[{\"productId\":\"64d3f001a3dd16b55403b821\",\r\n        \"quantity\":1,\r\n        \"selectPrice\":24},\r\n        {\"productId\":\"64d3f001a3dd16b55403b821\",\r\n        \"quantity\":2,\r\n        \"selectPrice\":48}\r\n    ],\r\n    \"totalPrice\":24,\r\n    \"status\":\"Completed\",\r\n    \"note\":\"Good oh yeah\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/new=Orders",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"new=Orders"
									]
								}
							},
							"response": []
						},
						{
							"name": "getOrders",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/Orders",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"Orders"
									]
								}
							},
							"response": []
						},
						{
							"name": "putOrders",
							"request": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"tableNumber\":\"1\",\r\n    \"orderInformation\":[{\"productId\":\"64d3f001a3dd16b55403b821\",\r\n        \"quantity\":1,\r\n        \"selectPrice\":24}\r\n    ],\r\n    \"totalPrice\":24,\r\n    \"status\":\"Completed\",\r\n    \"note\":\"Good oh yeah\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/update=Orders?_id=64d40027502034037ab834a6",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"update=Orders"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d40027502034037ab834a6"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "deleteOrders",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/del=Orders?_id=64d40027502034037ab834a6",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"del=Orders"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d40027502034037ab834a6"
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "Products",
					"item": [
						{
							"name": "postProduct",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"productType\":\"64d3eecaa3dd16b55403b811\",\r\n    \"productCategory\":\"64d3ef84a3dd16b55403b813\",\r\n    \"image\":\"64d3ee3c91cdccfab22f3c0e\",\r\n    \"name\":\"dantuni\",\r\n    \"description\":\"davuk,tomato\",\r\n    \"price\":23\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/new=Product",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"new=Product"
									]
								}
							},
							"response": []
						},
						{
							"name": "getProduct",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/Product",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"Product"
									]
								}
							},
							"response": []
						},
						{
							"name": "putProduct",
							"request": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"productType\":\"64d3eecaa3dd16b55403b811\",\r\n    \"productCategory\":\"64d3ef84a3dd16b55403b813\",\r\n    \"image\":\"64d3ee3c91cdccfab22f3c0e\",\r\n    \"name\":\"dantunis\",\r\n    \"description\":\"davuk,tomatos\",\r\n    \"price\":23\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/update=Product",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"update=Product"
									]
								}
							},
							"response": []
						},
						{
							"name": "deleteProduct",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/del=Product?_id=64d3efbea3dd16b55403b81c",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"del=Product"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d3efbea3dd16b55403b81c"
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "ProductCategory",
					"item": [
						{
							"name": "postProductCategory",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\":\"dantuni\",\r\n    \"productType\":\"64d3eecaa3dd16b55403b811\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/new=ProductCategory",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"new=ProductCategory"
									]
								}
							},
							"response": []
						},
						{
							"name": "getProductCategory",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/ProductCategory",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"ProductCategory"
									]
								}
							},
							"response": []
						},
						{
							"name": "putProductCategory",
							"request": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\":\"dantunis\",\r\n    \"productType\":\"64d3eecaa3dd16b55403b811\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/update=ProductCategory",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"update=ProductCategory"
									]
								}
							},
							"response": []
						},
						{
							"name": "deleteProductCategroy",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/del=ProductCategory?_id=64d3ef84a3dd16b55403b813",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"del=ProductCategory"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d3ef84a3dd16b55403b813"
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "ProductType",
					"item": [
						{
							"name": "postProductType",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\":\"food\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/new=ProductType",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"new=ProductType"
									]
								}
							},
							"response": []
						},
						{
							"name": "getProductType",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/ProductType",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"ProductType"
									]
								}
							},
							"response": []
						},
						{
							"name": "putProductType",
							"request": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\":\"foods\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/update=ProductType",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"update=ProductType"
									]
								}
							},
							"response": []
						},
						{
							"name": "deleteProductType",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/del=ProductType?_id=64d3eecaa3dd16b55403b811",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"del=ProductType"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d3eecaa3dd16b55403b811"
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "QRCode",
					"item": [
						{
							"name": "postQRCode",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"tableNumber\":\"2\",\r\n    \"webURL\":\"localhost:5000\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/new=QRCode",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"new=QRCode"
									]
								}
							},
							"response": []
						},
						{
							"name": "getQRCode",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/QRCode",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"QRCode"
									]
								}
							},
							"response": []
						},
						{
							"name": "putQRCode",
							"request": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"tableNumber\":\"1\",\r\n    \"webURL\":\"localhost:3000\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/update=QRCode?_id=64d3f4c00e908f6cda882aa7",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"update=QRCode"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d3f4c00e908f6cda882aa7"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "deleteQRCode",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/del=QRCode?_id=64d3f4c00e908f6cda882aa7",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"del=QRCode"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d3f4c00e908f6cda882aa7"
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "SiteInformation",
					"item": [
						{
							"name": "postSiteInformation",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\":\"predict\",\r\n    \"image\":\"64d3ee3c91cdccfab22f3c0e\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/new=SiteInformation",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"new=SiteInformation"
									]
								}
							},
							"response": []
						},
						{
							"name": "getSiteInformation",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/SiteInformation",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"SiteInformation"
									]
								}
							},
							"response": []
						},
						{
							"name": "putSiteInformation",
							"request": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\":\"predicts\",\r\n    \"image\":\"64d3ee3c91cdccfab22f3c0e\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/update=SiteInformation?_id=64d3f8a21a26f419c326347f",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"update=SiteInformation"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d3f8a21a26f419c326347f"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "deleteSiteInformation",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/del=SiteInformation?_id=64d3f8a21a26f419c326347f",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"del=SiteInformation"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d3f8a21a26f419c326347f"
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "SocialMedia",
					"item": [
						{
							"name": "postSocialMedia",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\":\"predict\",\r\n    \"image\":\"64d3ee3c91cdccfab22f3c0e\",\r\n    \"link\":\"localhost:5000\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/new=SocialMedia",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"new=SocialMedia"
									]
								}
							},
							"response": []
						},
						{
							"name": "getSocialMedia",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/SocialMedia",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"SocialMedia"
									]
								}
							},
							"response": []
						},
						{
							"name": "putSocialMedia",
							"request": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\":\"predicts\",\r\n    \"image\":\"64d3ee3c91cdccfab22f3c0e\",\r\n    \"link\":\"localhost:5000\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/update=SocialMedia?_id=64d3f9651a26f419c3263498",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"update=SocialMedia"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d3f9651a26f419c3263498"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "deleteSocialMedia",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/del=SocialMedia?_id=64d3f9651a26f419c3263498",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"del=SocialMedia"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d3f9651a26f419c3263498"
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "Thema",
					"item": [
						{
							"name": "postThema",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"headerColor\":\"#3C0B0B\",\r\n    \"footerColor\":\"#3C0B0B\",\r\n    \"backgroundColor\":\"#3C0B0B\",\r\n    \"productCardColor\":\"#3C0B0B\",\r\n    \"fontColor\":\"#3C0B0B\",\r\n    \"titleColor\":\"#3C0B0B\",\r\n    \"inputCardColor\":\"#3C0B0B\",\r\n    \"inputButton\":\"#3C0B0B\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/new=Thema",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"new=Thema"
									]
								}
							},
							"response": []
						},
						{
							"name": "getThema",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/Thema",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"Thema"
									]
								}
							},
							"response": []
						},
						{
							"name": "putThema",
							"request": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"headerColor\":\"#3C0B00\",\r\n    \"footerColor\":\"#3C0B00\",\r\n    \"backgroundColor\":\"#3C0B00\",\r\n    \"productCardColor\":\"#3C0B00\",\r\n    \"fontColor\":\"#3C0B00\",\r\n    \"titleColor\":\"#3C0B00\",\r\n    \"inputCardColor\":\"#3C0B00\",\r\n    \"inputButton\":\"#3C0B00\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/admin/update=Thema?_id=64d3fb5d9551dda871918afe",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"update=Thema"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d3fb5d9551dda871918afe"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "deleteThema",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/admin/del=Thema?_id=64d3fb5d9551dda871918afe",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"admin",
										"del=Thema"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d3fb5d9551dda871918afe"
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "postAdmin",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"lucyNumber\":\"0\",\r\n    \"password\":\"0001\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:5000/api/v2/admin/new=Admin",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"v2",
								"admin",
								"new=Admin"
							]
						}
					},
					"response": []
				},
				{
					"name": "getAdmin",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:5000/api/v2/admin",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"api",
								"v2",
								"admin"
							]
						}
					},
					"response": []
				}
			],
			"description": "admin page",
			"auth": {
				"type": "apikey",
				"apikey": [
					{
						"key": "value",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDRjMGQ3NDk3MDhhZmRhZWZjMGU3OCIsImlhdCI6MTY5MTY2NjkxMCwiZXhwIjoxNjkxNjcwNTEwfQ.0GrAqOHskNfqbxdADGP6wmXMZSr8Y6c3Wt5Q5WIDCAI",
						"type": "string"
					},
					{
						"key": "key",
						"value": "Authorization",
						"type": "string"
					}
				]
			},
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"type": "text/javascript",
						"exec": [
							""
						]
					}
				},
				{
					"listen": "test",
					"script": {
						"type": "text/javascript",
						"exec": [
							""
						]
					}
				}
			]
		},
		{
			"name": "User",
			"item": [
				{
					"name": "Banner",
					"item": [
						{
							"name": "GetBanner",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/user/Banner",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"user",
										"Banner"
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "ContactUs",
					"item": [
						{
							"name": "getContactUs",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/user/ContactUs",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"user",
										"ContactUs"
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "Image",
					"item": [
						{
							"name": "getImage",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/user/Image",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"user",
										"Image"
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "Orders",
					"item": [
						{
							"name": "postOrders",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"tableNumber\":\"1\",\r\n    \"orderInformation\":[{\"productId\":\"64d3f001a3dd16b55403b821\",\r\n        \"quantity\":1,\r\n        \"selectPrice\":24},\r\n        {\"productId\":\"64d3f001a3dd16b55403b821\",\r\n        \"quantity\":2,\r\n        \"selectPrice\":48}\r\n    ],\r\n    \"totalPrice\":24,\r\n    \"status\":\"Completed\",\r\n    \"note\":\"Good oh yeah\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/user/new=Orders",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"user",
										"new=Orders"
									]
								}
							},
							"response": []
						},
						{
							"name": "getOrders",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/user/Orders",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"user",
										"Orders"
									]
								}
							},
							"response": []
						},
						{
							"name": "putOrders",
							"request": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"tableNumber\":\"1\",\r\n    \"orderInformation\":[{\"productId\":\"64d3f001a3dd16b55403b821\",\r\n        \"quantity\":1,\r\n        \"selectPrice\":24}\r\n    ],\r\n    \"totalPrice\":24,\r\n    \"status\":\"Completed\",\r\n    \"note\":\"Good oh yeah\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:5000/api/v2/user/update=Orders?_id=64d40027502034037ab834a6",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"user",
										"update=Orders"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d40027502034037ab834a6"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "deleteOrders",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/user/del=Orders?_id=64d40027502034037ab834a6",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"user",
										"del=Orders"
									],
									"query": [
										{
											"key": "_id",
											"value": "64d40027502034037ab834a6"
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "Products",
					"item": [
						{
							"name": "getProduct",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/user/Product",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"user",
										"Product"
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "ProductCategory",
					"item": [
						{
							"name": "getProductCategory",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/user/ProductCategory",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"user",
										"ProductCategory"
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "ProductType",
					"item": [
						{
							"name": "getProductType",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/user/ProductType",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"user",
										"ProductType"
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "QRCode",
					"item": [
						{
							"name": "getQRCode",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/user/QRCode",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"user",
										"QRCode"
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "SiteInformation",
					"item": [
						{
							"name": "getSiteInformation",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/user/SiteInformation",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"user",
										"SiteInformation"
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "SocialMedia",
					"item": [
						{
							"name": "getSocialMedia",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/user/SocialMedia",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"user",
										"SocialMedia"
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "Thema",
					"item": [
						{
							"name": "getThema",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:5000/api/v2/user/Thema",
									"host": [
										"localhost"
									],
									"port": "5000",
									"path": [
										"api",
										"v2",
										"user",
										"Thema"
									]
								}
							},
							"response": []
						}
					]
				}
			],
			"auth": {
				"type": "apikey",
				"apikey": [
					{
						"key": "value",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDRjYTkyNDhkM2E0Njk1ZDIwNDVjZCIsImlhdCI6MTY5MTY2NzA5NCwiZXhwIjoxNjkxNjcwNjk0fQ.8SU6DPXkwkEUH8ccM6TkO0hpVAiVwIIL_1YgCB2dkxA",
						"type": "string"
					},
					{
						"key": "key",
						"value": "Authorization",
						"type": "string"
					}
				]
			},
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"type": "text/javascript",
						"exec": [
							""
						]
					}
				},
				{
					"listen": "test",
					"script": {
						"type": "text/javascript",
						"exec": [
							""
						]
					}
				}
			]
		},
		{
			"name": "Login",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/api/v2/login/2",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"v2",
						"login",
						"2"
					]
				}
			},
			"response": []
		},
		{
			"name": "adminLogin",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"password\":\"0001\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/api/v2/login/0/admin",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"v2",
						"login",
						"0",
						"admin"
					]
				}
			},
			"response": []
		}
	]
}