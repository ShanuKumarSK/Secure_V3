import cookie from "js-cookie";

export default function logout(): void | false {
    if (typeof window !== "undefined") {
        cookie.remove("accessToken");
        cookie.remove("user");
        cookie.remove("roles");

        localStorage.clear();

        window.location.href = "/auth/signIn";
    }

    return false;
}