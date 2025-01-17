import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";


export default function Catalog(){
  const [products, setProducts] = useState<Product[]>([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list().then(products=>setProducts(products))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }, [])

  if(loading) return <LoadingComponent />

  return (
    <>
    <h1> Catalog</h1>
      <ProductList products={products}></ProductList>
      </>
  )
}