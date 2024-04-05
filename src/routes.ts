import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { RedirectPage } from "./pages/redirectPage";
import { SignupPage } from "./pages/signup";

export interface IRoute {
  path: string;
  name: string;
  component: React.FC;
  authGuard: boolean;
  noAuthGuard: boolean;
}

export const paths = {
  login: "/login",
  signup: "/signup",
  home: "/",
  features: "/#features",
  pricing: "/#pricing",
  analytics: "/#analytics",
  faq: "/#faq",
  scissor: "/scissor/:alias",
  rocket: "/rocket/:alias",
};

export const pageRoutes: IRoute[] = [
  {
    path: paths.home,
    name: "Home Page",
    component: HomePage,
    authGuard: false,
    noAuthGuard: false,
  },
  {
    path: paths.login,
    name: "Login Page",
    component: LoginPage,
    authGuard: false,
    noAuthGuard: false,
  },
  {
    path: paths.signup,
    name: "Signup Page",
    component: SignupPage,
    authGuard: false,
    noAuthGuard: false,
  },
  {
    path: paths.scissor,
    name: "scissor",
    component: RedirectPage,
    authGuard: true,
    noAuthGuard: false,
  },
  {
    path: paths.rocket,
    name: "rocket",
    component: RedirectPage,
    authGuard: true,
    noAuthGuard: false,
  },
];
