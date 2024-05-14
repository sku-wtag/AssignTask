// ShowData.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { GET_DATA } from "../config/ApiPath";
import {
  getAllDataFailed,
  getAllDataSuccess,
} from "../store/reducer/loadDataReducer";
import { Link } from "react-router-dom";

const ShowData = () => {
  const dispatch = useDispatch();
  const infos = useSelector((state) => state.loadData.infos);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(GET_DATA);
        if (response.data) {
          dispatch(
            getAllDataSuccess({
              infos: response.data.users,
              message: "Successfully got all informations",
            })
          );
        } else {
          dispatch(
            getAllDataFailed({
              message: "Something happened wrong.",
            })
          );
        }
      } catch (error) {
        dispatch(
          getAllDataFailed({
            message: error.message,
          })
        );
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="row">
            <h2 className="col-8">Your informations</h2>
            <Link className="col-4" to="/">
              Back To Home
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {infos.map((info, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{info.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
