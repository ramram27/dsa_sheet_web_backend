import RefreshToken from "../models/RefreshToken.js";

export const saveRefreshToken = (data) =>
    RefreshToken.create(data);

export const findRefreshToken = (token) =>
    RefreshToken.findOne({ token });
