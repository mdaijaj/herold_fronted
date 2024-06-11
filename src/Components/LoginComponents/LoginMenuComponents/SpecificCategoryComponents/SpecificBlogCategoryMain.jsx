import { useContext, useEffect } from "react"
import AppContext from "../../../../AppContext"

export const SpecificBlogCategoryMain = () => {
    const { blogCategory, baseBackendRoute } = useContext(AppContext);
    useEffect(() => {
        console.log(blogCategory);
    }, [blogCategory])
    return (
        <>
            <main id="primary" className="site-main">

                <div id="bcn_widget-2" className="widget_breadcrumb_navxt">
                    <div
                        className="breadcrumbs"
                        vocab="https://schema.org/"
                        typeof="BreadcrumbList"
                    >
                        <span property="itemListElement" typeof="ListItem">
                            <a
                                property="item"
                                typeof="WebPage"
                                title="Go to Herald Blog."
                                href="/blogs"
                                className="home"
                            >
                                <span property="name">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Home</font>
                                    </font>
                                </span>
                            </a>
                            <meta property="position" content={1} />
                        </span>
                        <img
                            width={504}
                            height={504}
                            src="https://www.herold.at/blog/wp-content/uploads/2021/04/slide_right.svg"
                        />
                        <span property="itemListElement" typeof="ListItem">
                            <span
                                property="name"
                                className="archive taxonomy category current-item"
                            >
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        {blogCategory?.category?.category_name}
                                    </font>
                                </font>
                            </span>

                        </span>
                    </div>
                </div>
                <div className="entry-content">

                    <h1 className="heroldblog_single_title">
                        <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                                {blogCategory?.category?.category_name}
                            </font>
                        </font>
                    </h1>
                    <div className="flex_wrapper wide_flex_wrapper">

                        <div
                            className="wp-block-cover has-background-dim herold_header_single header_archive"
                            style={{
                                backgroundImage:
                                    `url(${baseBackendRoute}${blogCategory?.category?.image})`
                            }}
                        >

                            <div className="wp-block-cover__inner-container">

                                <div className="fullwidth_inner">

                                    <h2>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                {blogCategory?.blog_card[0].title}
                                            </font>
                                        </font>
                                    </h2>
                                    <a
                                        href={`/specific-blog/${blogCategory?.blog_card[0].id}`}
                                        className="cta_btn yellow"
                                    >
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>show more</font>
                                        </font>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="archive_desc flex_wrapper">

                        <p>
                            <strong>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        {blogCategory?.category?.title}
                                    </font>
                                </font>
                            </strong>
                        </p>
                    </div>
                </div>
                <div className="flex_wrapper three_posts_wrap">

                    <ul className="current_posts three_posts">
                        {
                            blogCategory?.blog_card?.map((data, index) => (
                                <li className="shadow">
                                    <div className="sh_inner">
                                        <div className="sh_img_inner">
                                            <a href={`/specific-blog/${data.slug}/`}>
                                                <img
                                                    width={400}
                                                    height={267}
                                                    src={`${baseBackendRoute}/media/${data.image}`}
                                                    className="attachment-blurred_header size-blurred_header wp-post-image"
                                                    alt={data.title}
                                                    decoding="async"
                                                    fetchpriority="high"
                                                    srcSet={`${baseBackendRoute}/media/${data.image}`}
                                                    sizes="(max-width: 400px) 100vw, 400px"
                                                />
                                            </a>
                                        </div>
                                        <div className="shadow_inner">
                                            <p className="right_author_name">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        {data.title}
                                                    </font>
                                                </font>
                                            </p>
                                            <p className="author_readtime">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        {`${blogCategory?.editor?.editor_name} |  ${blogCategory?.duration}`}
                                                    </font>
                                                </font>
                                            </p>
                                            <a
                                                href={`/specific-blog/${data.slug}/`}
                                                className="cta_btn blue"
                                            >
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>To the post</font>
                                                </font>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                    <a
                        href="/blogs"
                        className="cta_btn blue btn loadMoreBtn"
                    >
                        <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>Back to overview</font>
                        </font>
                    </a>
                </div>
            </main>

        </>
    )
}