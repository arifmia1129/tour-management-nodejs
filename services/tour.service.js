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

module.exports.getTourByIdService = async (id) => {
    await Tour.updateOne({ _id: id }, { $inc: { viewCount: 1 } })
    const result = await Tour.findById(id);
    return result
}
module.exports.updateTourByIdService = async (id, data) => {
    const result = await Tour.updateOne({ _id: id }, { $set: data }, { runValidators: true })
    return result
}
module.exports.trendingTourService = async () => {
    const result = await Tour.find({}).sort({ viewCount: -1 }).limit(3);
    return result
}
module.exports.cheapestTourService = async () => {
    const result = await Tour.find({}).sort({ price: 1 }).limit(3);
    return result
}
