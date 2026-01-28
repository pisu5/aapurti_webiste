const Pmfbyqc = () => {
    const qcSteps = [
        "Verify farmer application details",
        "Validate land & crop data accuracy",
        "Cross-check survey and satellite inputs",
        "Identify discrepancies and flag cases",
        "Approve or reject after QC review",
    ];

    return (
        <div className="min-h-screen bg-background px-6 py-10">
            {/* Page Header */}
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-semibold text-heading">
                    PMFBY Quality Control
                </h1>
                <p className="mt-2 max-w-2xl text-body">
                    This section outlines the Quality Control (QC) process followed under
                    PMFBY to ensure data accuracy, compliance, and reliable decision-making
                    across agricultural insurance workflows.
                </p>
            </div>

            {/* QC Process Card */}
            <div className="max-w-6xl mx-auto mt-8">
                <div className="rounded-xl border border-borderLight bg-card p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-heading">
                        QC Process Flow
                    </h2>
                    <p className="mt-1 text-sm text-muted">
                        Step-by-step validation followed before final approval
                    </p>

                    <ul className="mt-6 space-y-4">
                        {qcSteps.map((step, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-4 rounded-lg border border-borderLight bg-background px-4 py-3"
                            >
                                {/* Step Number */}
                                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primarySoft text-sm font-semibold text-primary">
                                    {index + 1}
                                </div>

                                {/* Step Text */}
                                <p className="text-body text-sm leading-relaxed">
                                    {step}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Action Section */}
            <div className="max-w-6xl mx-auto mt-10 flex justify-end">
                <button className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-heading hover:bg-accentHover transition-colors">
                    Start QC Review
                </button>
            </div>
        </div>
    );
};

export default Pmfbyqc;
