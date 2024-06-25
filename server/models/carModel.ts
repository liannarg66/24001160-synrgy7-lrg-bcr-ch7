export interface Car {
    id: number;
    name: string;
    price: string;
    image: string;
    start_rent: string;
    finish_rent: string;
    availability: boolean;
    created_at: Date | String;
    updated_at: Date | String;
  }
  
  // Data dummy untuk daftar mobil
  export const cars: Car[] = [
    { id: 1, name: "TOYOTA",price: "Rp200.000;", image: "", start_rent: "2024/05/20", finish_rent: "2024/05/26", availability: true, created_at: new Date(), updated_at: new Date()  },
    { id: 2, name: "HYUNDAI",price: "Rp200.000;", image: "", start_rent: "2024/05/20", finish_rent: "2024/05/26", availability: true, created_at: new Date(), updated_at: new Date()  },
    { id: 3, name: "MG",price: "Rp200.000;", image: "", start_rent: "2024/05/20", finish_rent: "2024/05/26", availability: true, created_at: new Date(), updated_at: new Date()  },
    { id: 4, name: "DAIHATSU",price: "Rp200.000;", image: "", start_rent: "2024/05/20", finish_rent: "2024/05/26", availability: true, created_at: new Date(), updated_at: new Date()  },
  ];
  