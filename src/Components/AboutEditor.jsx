import { useContext, useEffect } from "react";
import { AboutEditorNav } from "./AboutEditorComponents/AboutEditorNav";
import { AboutEditorMain } from "./AboutEditorComponents/AboutEditorMain";
import { AboutEditorFoot } from "./AboutEditorComponents/AboutEditorFoot";
import AppContext from "../AppContext";
import axios from "axios";
import { useParams } from "react-router";
import { ProductNavigationBar } from "./ProductsComponents/ProductsNavigationBar";


export const AboutEditor = () => {
    const { edit } = useParams();
    const { setCurrentEditorList, setGradimoAdviceNow, setEditorIdList, setEditorList, setCounselerIdList, counselerList, counselerIdList, setIsMobile, setProductsList, baseBackendRoute, setCounselerList } = useContext(AppContext);
    useEffect(() => {
        document.body.classList.add("home");
        var head1 = document.head;
        var link1 = document.createElement("link");
        link1.type = "text/css";
        link1.rel = "stylesheet";
        link1.href = "/blog/wp-content/cache/min/1/blog/wp-content/plugins/ajax-load-more-anything/assets/css/stylesf16a.css"
        link1.media = "all";
        head1.appendChild(link1);


        var head2 = document.head;
        var link2 = document.createElement("link");
        link2.type = "text/css";
        link2.rel = "stylesheet";
        link2.href = "/blog/wp-content/cache/min/1/blog/wp-content/plugins/lemon-firmenkaruselle/lemon_firmen_stylesf16a.css"
        link2.media = "all";
        head2.appendChild(link2);

        var head3 = document.head;
        var link3 = document.createElement("link");
        link3.type = "text/css";
        link3.rel = "stylesheet";
        link3.href = "/blog/wp-content/plugins/table-of-contents-plus/screen.min480c.css"
        link3.media = "all";
        head3.appendChild(link3);


        var head4 = document.head;
        var link4 = document.createElement("link");
        link4.type = "text/css";
        link4.rel = "stylesheet";
        link4.href = "/blog/wp-content/cache/min/1/blog/wp-content/themes/heroldblog/stylef16a.css"
        link4.media = "all";
        head4.appendChild(link4);




        var head6 = document.head;
        var link6 = document.createElement("link");
        link6.type = "text/css";
        link6.rel = "stylesheet";
        link6.href = "/blog/wp-content/cache/min/1/releases/v5.2.0/css/all9197.css"
        link6.media = "all";
        head6.appendChild(link6);


        var head7 = document.head;
        var link7 = document.createElement("link");
        link7.type = "text/css";
        link7.rel = "stylesheet";
        link7.href = "/blog/wp-content/cache/min/1/blog/wp-content/themes/heroldblog/assets/fonts/colfaxweb/font-styles9197.css"
        link7.media = "all";
        head7.appendChild(link7);


        var head8 = document.head;
        var link8 = document.createElement("link");
        link8.type = "text/css";
        link8.rel = "stylesheet";
        link8.href = "/blog/wp-content/cache/min/1/blog/wp-content/themes/heroldblog/css/slick9197.css"
        link8.media = "all";
        head8.appendChild(link8);

        var head9 = document.head;
        var link9 = document.createElement("link");
        link9.type = "text/css";
        link9.rel = "stylesheet";
        link9.href = "/blog/wp-content/cache/min/1/blog/wp-content/plugins/ajax-search-lite/css/style.basic9197.css"
        link9.media = "all";
        head9.appendChild(link9);

        var head10 = document.head;
        var link10 = document.createElement("link");
        link10.type = "text/css";
        link10.rel = "stylesheet";
        link10.href = "/blog/wp-content/cache/min/1/blog/wp-content/plugins/ajax-search-lite/css/style-underline9197.css"
        link10.media = "all";
        head10.appendChild(link10);

        var head5 = document.head;
        var link5 = document.createElement("link");
        link5.type = "text/css";
        link5.rel = "stylesheet";
        link5.href = "/blog/wp-content/cache/min/1/blog/wp-content/themes/heroldblog/css/lemon_custom_styles9197.css"
        link5.media = "all";
        head5.appendChild(link5);


        var head11 = document.head;
        var link11 = document.createElement("link");
        link11.type = "text/css";
        link11.rel = "stylesheet";
        link11.href = "/blog/wp-content/cache/min/1/blog/wp-content/themes/heroldblog/css/lemon_custom_styles254d.css"
        link11.media = "all";
        head11.appendChild(link11);

        var head12 = document.head;
        var link12 = document.createElement("link");
        link12.type = "text/css";
        link12.rel = "stylesheet";
        link12.href = "/editor/style.min.css"
        link12.media = "all";
        head12.appendChild(link12);

        const fetchData = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/products/product/`)
                .then(async (res) => {
                    const resData = await res.data.sort((a, b) => a.id - b.id);
                    setProductsList(resData);
                    console.log(resData);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        fetchData();


        const getCounselersList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/counselor/counselors/`)
                .then((response) => {
                    if (counselerList?.length === 0) {
                        console.log('products callling');
                        setCounselerList(response.data);
                    }

                    if (counselerIdList.length === 0) {
                        console.log('products ID callling');
                        let l = []
                        for (let j of response.data) {
                            l.push(j);
                            // setCounselerIdList((prevState) => [...prevState, j.id])
                        }
                        setCounselerIdList(l);
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getCounselersList();




        const getEditorIdList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/counselor/editors/`)
                .then((res) => {

                    console.log(res);
                    const ids = res.data.map(item => item.id);
                    setEditorIdList(ids);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getEditorIdList();



        const getEditorList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/counselor/editors/`)
                .then((res) => {
                    console.log(res);
                    setEditorList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getEditorList();


        const getCurrentEditorList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/counselor/editor/${edit}/`)
                .then((res) => {
                    console.log(res);
                    setCurrentEditorList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getCurrentEditorList();


        const getGradimoAdviceNow = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/pages/get-advice-banner/`)
                .then((res) => {
                    console.log(res);
                    setGradimoAdviceNow(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getGradimoAdviceNow();


    }, [])
    return (
        <>

            <div id="page" className="site">
                {/* <FreeCheckNav /> */}
                <a class="skip-link screen-reader-text" href="#primary" _msttexthash="238654" _msthash="15">Skip to content</a>
                <ProductNavigationBar />
                <AboutEditorMain />
                <AboutEditorFoot />
                {/* <FreeCheckMain />

                <FreeCheckFoot /> */}
            </div>
        </>
    )
}