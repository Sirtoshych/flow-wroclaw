import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation/Navigation";
import styles from "./layout.module.scss";
import { Lexend_Deca } from "next/font/google";
const font = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Flow Ultimate Wrocław",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${styles.body} ${font.className}`}>
                <div className={styles.header}>
                    <img
                        src={"/logo.png"}
                        alt="Logo"
                        className={styles.image}
                    />
                    <Navigation />
                </div>
                {children}
                <div className={styles.footer}>
                    <Navigation />
                    <div className={styles.social}>
                        <a href="https://www.facebook.com/flow.ultimate.wroclaw/">
                            <img
                                src="/facebook.png"
                                alt="Facebook"
                                style={{ width: "32px", height: "32px" }}
                            />
                        </a>
                        <a href="https://www.facebook.com/flow.ultimate.wroclaw/">
                            <img
                                src="/instagram.png"
                                alt="Imstagram"
                                style={{ width: "32px", height: "32px" }}
                            />
                        </a>
                    </div>
                </div>
            </body>
        </html>
    );
}
