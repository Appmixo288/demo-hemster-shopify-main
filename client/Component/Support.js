import React, { useEffect } from 'react';
import {
    Page,
    Card,
    Layout,
    Heading,
    Link,
} from "@shopify/polaris";
import $ from "jquery";

function Support(props) {

    useEffect(() => {
        $(document).ready(function () {
            $(".faq_question").click(function () {
                if ($(this).parent().is(".open")) {
                    $(this)
                        .closest(".faq")
                        .find(".faq_answer_container")
                        .slideUp();
                    $(this).closest(".faq").removeClass("open");
                } else {
                    $(".faq_answer_container").slideUp();
                    $(".faq").removeClass("open");
                    $(this)
                        .closest(".faq")
                        .find(".faq_answer_container")
                        .slideDown();
                    $(this).closest(".faq").addClass("open");
                }
            });
        });
    });
    return (
        <div>
            <Page title="Support">
                <div className="faq_container">
                    <Layout>
                        <Layout.Section>
                            <Card sectioned>
                                <div className="faq">
                                    <div>
                                        <Heading>Quick Answers</Heading>
                                        <div
                                            className="faq_answer"
                                            style={{ marginTop: "10px" }}>
                                            For support and app related queries, feel free to email us{" "}
                                            <Link external onClick={() => window.open('mailto:matt@hemster.co', "_blank")}>
                                                {" "}
                                                    here
                                                </Link>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Layout.Section>
                    </Layout>
                </div>
            </Page>
        </div>
    );
}

export default Support;

