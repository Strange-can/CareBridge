module.exports = function() {
    return {
        url: process.env.SUPABASE_URL,
        anonKey: process.env.SUPABASE_KEY
    };
};
