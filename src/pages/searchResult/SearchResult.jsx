import React ,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDataFromAPI } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
// import MovieCard from "../../components/movirCard/MovieCard"
// import Spinner from "../"
import noResults from "../../assets/no-results.png"
import "./style.scss";

const SearchResult = () => {
  const [data ,setData] = useState(null)
  const [pageNum ,setPageNum] = useState(1)
  const [loading ,setLoading] = useState(false)
  const {query} = useParams()
  return <div></div>;
};

export default SearchResult;
