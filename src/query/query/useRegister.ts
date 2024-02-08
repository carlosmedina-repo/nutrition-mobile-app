import { REGISTER_API } from "@/src/constants/Api";
import { useMutation } from "@tanstack/react-query";

type Response = {
  status: boolean;
};

type MutationResponse = {
  data: Response;
};

type useRegisterType = {
  email: string;
  password: string;
  birthDate: string;
  height: number;
  weight: number;
  gender: string;
  firstName: string;
  lastName: string;
};

const fetchRegister = async ({
  email,
  password,
  birthDate,
  height,
  weight,
  firstName,
  lastName,
  gender,
}: useRegisterType) => {
  const body = JSON.stringify({
    email,
    password,
    birthDate,
    height,
    weight,
    firstName,
    lastName,
    gender,
  });
  const response = await fetch(REGISTER_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  console.log("body", body);

  const data = await response.json();

  console.log("data", data);

  if (!response.ok) {
    if (response.status === 409) {
      throw new Error("User already exists");
    }
  }

  //"message": "The following fields are required: firstName, lastName, gender"
  if (data.message?.startsWith("The following fields are required")) {
    throw new Error("Please fill all fields");
  }

  return {
    data: data as Response,
  };
};

const useRegister = ({
  email,
  password,
  birthDate,
  height,
  weight,
  gender,
  firstName,
  lastName,
}: useRegisterType) => {
  const { mutate, isPending, isSuccess, isError, error } = useMutation<
    MutationResponse,
    Error,
    useRegisterType
  >({
    mutationFn: fetchRegister,
    onMutate: async () => {
      //   console.log("onMutate");
    },
    onSuccess: () => {
      //   console.log("onSuccess");
    },
  });

  return {
    register: () =>
      mutate({
        email,
        password,
        birthDate,
        height,
        weight,
        gender,
        firstName,
        lastName,
      }),
    isPending,
    isSuccess,
    isError,
    error,
  };
};

export default useRegister;
