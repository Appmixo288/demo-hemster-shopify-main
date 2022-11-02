const analytics = async (ctx) => {

    try {
        const { shop, type, key, customerId } = ctx.request.body;

        if (!shop || !type || !key || !customerId) {

            // send invalid parameters error
            console.log("send invalid parameters error");
            return ctx.status = 200;

        }
        // check for key
        if (!["view"].includes(key)) {

            // send invalid key error
            console.log("send invalid key error");
            return ctx.status = 200;
        }
        if (
            !["pdp1", "pdp2", "thank1", "thank2", "thank3", "cart1"].includes(type)
        ) {
            // send invalid type error
            console.log("send invalid type error");
            return ctx.status = 200;
        }

        // get analytics model
        // check if this store is in database or not
        const analyticsData = await Analytics.findOne({ shop });
        
        if (!analyticsData) {

            const analyticsCollection = { shop };
            if (key === "view") {

                analyticsCollection[type] = { totalViews: 1 };
                analyticsCollection[type].views = { customerId: 1 };

            }

            // create a new collection
            const ANALYTICS = new Analytics(analyticsCollection);
            await ANALYTICS.save();

        } else {

            // get the data from database
            if (customerId in analyticsData[type].views) {

                await Analytics.findOneAndUpdate(
                    { shop },
                    {
                        $inc: {
                            [`${type}.totalViews`]: 1,
                            [`${type}.views.${customerId}`]: 1,
                        },
                    }
                );

            } else {

                await Analytics.findOneAndUpdate(
                    { shop },
                    {
                        $inc: {
                            [`${type}.totalViews`]: 1,
                        },
                        $set: {
                            [`${type}.views.${customerId}`]: 1,
                        },
                    }
                );

            }
        }

        return ctx.status = 200;

    } catch (error) {

        // send internal server error
        console.log("Error", error);

    }
};