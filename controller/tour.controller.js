const { saveTourService, getTourService } = require("../services/tour.service")

module.exports.getTour = async (req, res, next) => {
    try {
        let filters = { ...req.query };
        let queries = {};

        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            queries.fields = fields;
        }

        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            queries.sortBy = sortBy;
        }

        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * Number(limit);
            queries.skip = skip;
            queries.limit = Number(limit);
        }

        const excludeFields = ["sort", "limit", "page", "fields"]

        excludeFields.forEach(field => delete filters[field]);


        let filtersString = JSON.stringify(filters);

        filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);

        filters = JSON.parse(filtersString)

        const result = await getTourService(filters, queries);
        res.status(200).json({
            status: "success",
            message: "Successfully get tour details",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't get tour details",
            error: error.message
        })
    }
}
module.exports.saveTour = async (req, res, next) => {

    try {
        const result = await saveTourService(req.body);
        res.status(200).json({
            status: "success",
            message: "Successfully saved tour details"
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't save tour details",
            error: error.message
        })
    }
}