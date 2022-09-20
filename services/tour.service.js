const Tour = require("../model/Tour")

module.exports.saveTourService = async (tour) => {
    const result = await Tour.create(tour);
    return result;
}

module.exports.getTourService = async (filters, queries) => {
    const result = await Tour.find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .sort(queries.sortBy)
        .select(queries.fields)

    const total = await Tour.countDocuments(filters);
    const page = Math.ceil(total / queries.limit);
    return { total, page, result };
}