import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import React from 'react'

const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    }
  }));

export const Carousel = () => {
    const [trending, setTrending] = useState([]);
    const { currency } = CryptoState();

    const fetchTrendingCoins = async () => {
      const { data } = await axios.get(TrendingCoins(currency));
  
      console.log(data);
      setTrending(data);
    };
    useEffect(() => {
        fetchTrendingCoins();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currency]);

    const classes = useStyles();

  return (
    <div>Carousel</div>
  )
}
