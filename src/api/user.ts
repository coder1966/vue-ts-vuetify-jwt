import service from "@/utils/request";

export const login = (data: any) => {
  return service({
    url: "/api/v1/login",
    method: "post",
    data,
  });
};

export const logon = (data: any) => {
  return service({
    url: "/api/v1/logon",
    method: "post",
    data,
  });
};
export const checkToken = () => {
  return service({
    url: "/checkToken",
    method: "post",
  });
};
