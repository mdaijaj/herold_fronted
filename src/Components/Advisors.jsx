// import "./CustomStylesFiles/advisorsstyles.css";
import { ProductFooterQuestionBlock } from "./ProductsComponents/ProductFooterQuestionBlock";
import { ProductFooterContainer } from "./ProductsComponents/ProductFooterContainer";
import { AdvisorsNavigationBar } from "./AdvisorsComponents/AdvisorsNavigationBar";
import { useContext, useEffect } from "react";
import AppContext from "../AppContext";
import { AdvisorsFooterQuestionBlock } from "./AdvisorsComponents/AdvisorsFooterQuestionBlock";
import { AdvisorsRatebarHeadingComponent } from "./AdvisorsComponents/AdvisorsRatebarHeadingComponent";
import { AdvisorHomeTopComponent } from "./AdvisorsComponents/AdvisorHomeTopComponent";
import { AdvisorsFooterBody } from "./AdvisorsComponents/AdvisorsFooterBody";
import axios from "axios";

export const Advisors = () => {

    const { articlesList, setEditorList, setGradimoAdviceNow, setGradimoAdvisorsPage, setGradimoContact, setEditorIdList, counselerList, setArticlesList, counselerIdList, setCounselerIdList, setIsMobile, baseBackendRoute, setCounselerList, setProductsList } = useContext(AppContext);
    useEffect(() => {

        const getGradimoAdvisorsPage = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/pages/advisors-page/`)
                .then((res) => {
                    console.log(res);
                    setGradimoAdvisorsPage(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getGradimoAdvisorsPage();


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


        const fetchAnotherData = async () => {
            const res = await axios.get(`${baseBackendRoute}/api/v1/products/product/`);
            const resData = await res.data.sort((a, b) => a.id - b.id);
            setProductsList(resData);
            console.log(resData);
        }
        fetchAnotherData();
        const getCounselersList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/counselor/counselors/`)
                .then((response) => {
                    if (counselerList?.length === 0) {
                        console.log("advisor calling");
                        setCounselerList(response.data);
                    }
                    console.log(response.data);
                    if (counselerIdList?.length === 0) {
                        console.log("advisor id calling");
                        let l = []
                        for (let j of response.data) {
                            console.log(j.slug);
                            l.push(j.slug);
                            // setCounselerIdList((prevState) => [...prevState, j.id]);
                        }
                        setCounselerIdList(l);
                    }
                    //for (let j in response.data) {
                    // console.log(j)


                    //}
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getCounselersList();



        document.title = "Gradimo Skupaj  - Digital what you need.";
        document.body.style.overflow = "hidden";
        document.body.classList.add("home");


        var head = document.head;
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/helpie-faq/assets/main.bundleac02.css?ver=1696577368"
        link.media = "all"
        head.appendChild(link)

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/plugins/ajax-load-more-anything/css/ald-styles2f91.css?ver=2.4.6"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/contact-form-7-style/css/frontendac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/contact-form-7-style/css/responsiveac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/contact-form-7/includes/css/stylesac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/kk-star-ratings/src/core/public/css/kk-star-ratingsac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/kk-star-ratings/src/core/public/css/kk-star-ratingsac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/lemon-firmenkaruselle/lemon_firmen_stylesac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/easy-table-of-contents/vendor/icomoon/style.minac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/plugins/easy-table-of-contents/assets/css/screen.min01f0.css?ver=2.0.17"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/css/themefonts.minac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/font-awesome/4.6.1/css/font-awesome.minac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/themes/herold_blog_theme_neu/assets/css/wordpress-base.minc048.css?ver=0.1.08"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/style.minac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/css/custom_work_stylesac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/themes/herold_blog_theme_neu/style_additional.minc048.css?ver=0.1.08"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/themes/herold_blog_theme_neu/assets/css/typeahead.minc048.css?ver=0.1.08"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/fonts/colfaxweb/font-stylesac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/css/heroldblog_blogac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/css/slickac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/ajax-search-lite/css/style.basicac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        const getGradimoContact = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/legal/gradimo-contact/?format=json`)
                .then((res) => {
                    console.log(res);
                    setGradimoContact(res.data[0]);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getGradimoContact();

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/ajax-search-lite/css/style-simple-redac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);
        if (window.innerWidth <= 767) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    }, [])
    return (
        <>
            <div id="page" className="site">
                <a class="skip-link screen-reader-text" href="#primary" _msttexthash="238654" _msthash="15">Skip to content</a>
                <AdvisorsNavigationBar />
                <div id="primary" className="content-area">
                    <main id="main" className="site-main" role="main" style={{ marginTop: "100px" }}>
                        <div className="container">
                            <div className="col-md-12">
                                <article id="post-53318" className="post-53318 page type-page status-publish hentry">
                                    <div className="entry-content">
                                        <AdvisorsRatebarHeadingComponent />
                                        <AdvisorHomeTopComponent />
                                    </div>
                                </article>
                            </div>
                        </div>
                    </main>
                </div>
                <footer>
                    <AdvisorsFooterQuestionBlock />
                    <AdvisorsFooterBody />
                </footer>
            </div>
        </>
    )
}