import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IcreateUser, IUserCliente, IUserVendedor } from "../../services/interface/User";
import { useRequest } from "../Request";
import { v4 as uuidv4 } from "uuid";

const AuthContext = createContext<IContextAuth>({} as IContextAuth);

interface IContextAuth {
  isAuth: boolean;
  isAuthLevel: boolean;
  userCreate: any,
  login: (data: IDataLogin) => void;
  logout: () => void;
  checkAuth: (message?: string, route?: string) => void;
  checkLevelAuth: () => void;
  createUserOff: (user: IcreateUser) => void
}

interface IPropsAuth {
  children: ReactNode;
}

export interface IDataLogin {
  email: string;
  password: string;
}



export const AuthProvider = ({ children }: IPropsAuth) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userCreate, setUserCreate] = useState<Array<IUserCliente | IUserVendedor>>([])
  const [isAuthLevel, setIsAuthLevel] = useState(false);
  const [ user, setUser ] = useState<IUserCliente>()


  const { userLogin, updateUser } = useRequest();
  const navigate = useNavigate();

  const createUserOff = (user: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // console.log(user)
    // setUserCreate(user)
    /* console.log("usuario vindo do form", user)
    console.log("usuario vindo do state", userCreate) */
    const { email, password, imageLogo } = user;
    toast.success("Usuario cadastrado");

    localStorage.setItem("@KenzieLivre:Token", uuidv4());
    localStorage.setItem("@KenzieLivre:User", JSON.stringify({id: uuidv4(),...user}));

    login({ email, password, imageLogo });

    navigate("/login");
    // return userCreate
  }

  const activateLogin = (userProp: any) => {
    const userVerif = JSON.parse( localStorage.getItem("@KenzieLivre:User") as string )
    user&&setUser( userVerif )
    // console.log("email do state",user?.email) -> nao achou
    // console.log("email do passado no form",userProp?.email) -> achou
    // console.log("email do localstorage",userVerif?.email) -> achou
    
    if(userProp.email === userVerif?.email) {
      const toastId = toast.loading("Procurado usuario");
        toast.success("usuario logado", {
          id: toastId,
        });
        setIsAuth(true);
        navigate("/home");
    } else {
      console.log("nao consegui")
      toast.error("usuario Invalido")
      // toast.error("usuario Invalido", {
      //   id: toastId,
      // })
    }

    
  }

  const login = (data: any) => {
    // const toastId = toast.loading("Procurado usuario");

    activateLogin(data)
      // .then(({ accessToken, user }) => {
      //   localStorage.setItem("@KenzieLivre:Token", accessToken);
      //   localStorage.setItem("@KenzieLivre:User", JSON.stringify(user));

      //   toast.success("usuario logado", {
      //     id: toastId,
      //   });

      //   setIsAuth(true);
      //   navigate("/home");
      // })
      // .catch((_) => {
      //   toast.error("usuario Invalido", {
      //     id: toastId,
      //   });
      // });
  };

  const logout = () => {
    setIsAuth(false);
    setIsAuthLevel(false);

    localStorage.removeItem("@KenzieLivre:Token");
    localStorage.removeItem("@KenzieLivre:User");

    toast.success("Usuario desconectado");
  };

  // const userAuthanticated = (checkAuth: boolean, userId: string) => {
  //   navigate(`/users/${userId}`)
  // }

  const checkAuth = (message?: string, route: string = "/home") => {
    const user = JSON.parse(
      localStorage.getItem("@KenzieLivre:User") as string
    );

    if (user) {
      navigate(`/cart/finishCart`)
      setIsAuth(true);

      // updateUser({ checkAuth: true }, user.id)
      //   .then((result) => {
      //     setIsAuth(true);
      //   })
      //   .catch((_) => {
      //     if (message) {
      //       console.log("to dentro do catch")

      //       toast.error(message);
      //     }

      //     navigate(route);
      //   });
    } else {
      console.log("to do lado de fora")
      if (message) {
        toast.error(message);
      }

      navigate(route);
    }
  };

  const checkLevelAuth = () => {
    const user = JSON.parse(
      localStorage.getItem("@KenzieLivre:User") as string
    );

    if (user) {
      if (user.auth === "Vendedor") {
        setIsAuthLevel(true);
      } else {

        setIsAuthLevel(false);
        navigate("/home");
      }
    } else {
      navigate("/home");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        isAuthLevel,
        userCreate,
        login,
        logout,
        checkAuth,
        checkLevelAuth,
        createUserOff,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
