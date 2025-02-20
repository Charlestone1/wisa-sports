const CoachingTeam = () => {
    return (
        <section
            className="max-w-[1440px] mx-auto sm:h-[30rem] h-screen flex justify-center items-center font-sans sm:px-20 px-6 sm:pb-20 py-6 bg-cover bg-center text-white"
            style={{ backgroundImage: "url('/images/coachingmen.png')" }}
            id="coaching"
        >
            <div className="max-w-md space-y-5 text-center px-4">
                <h3 className="lg:text-3xl text-2xl mb-10">Coaching Team</h3>

                <p>At WISA Football Academy, we have an expert coaching staff that help train and mold players into professionals through their unique coaching methods.
                </p>

                <p>Our coaching team helps our players focus on building  exceptional playing prowess, sportsmanship, a winning attitude and teamwork.</p>
            </div>

        </section>
    );
};

export default CoachingTeam;