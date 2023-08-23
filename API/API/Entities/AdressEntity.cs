﻿namespace API.Entities
{
	public class AdressEntity
	{
		public required string Adress_Barcode { get; set; }
		public int Product_Amount { get; set; }
		public int Row { get; set; }
		public int Column { get; set; }
        public int Face { get; set; }

        //Foreign keys
        public int Product_Barcode { get; set; }
		public int Shelf_ID { get; set; }

		//Navigation properties
		public ProductEntity? product { get; set; }
		public required ShelfEntity shelf { get; set; }

		
	}
}

