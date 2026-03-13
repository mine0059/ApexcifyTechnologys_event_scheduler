const events = [
    {
        id: 1,
        title: "Meeting with Team",
        description: "Discuss project progress and next steps",
        date: "2026-07-01"
    },
    {
        id: 2,
        title: "Make a Presentation",
        description: "Prepare slides for the quarterly review",
        date: "2026-05-09"
    },
    {
        id: 3,
        title: "Client Call",
        description: "Discuss project requirements and timeline",
        date: "2026-04-01"
    },
    {
        id: 4,
        title: "Increase Work Force",
        description: "Add more members to the team to speed up the project",
        date: "2026-12-01"
    },
];

const getEvents = (req, res) => {
    const sortedEvents = [ ...events ].sort((a, b) => new Date(a.date) - new Date(b.date));

    res.status(200).json({
        success: true,
        data: sortedEvents
    });
}

const createEvent = (req, res) => {
    try {
        const { title, description, date } = req.body;

        const newEvent = {
            id: events.length ? events[events.length - 1].id + 1 : 1,
            title,
            description,
            date
        }

        events.push(newEvent);

        res.status(201).json({
            success: true,
            data: newEvent
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
}

export { getEvents, createEvent };