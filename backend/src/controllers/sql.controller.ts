import { Request, Response } from "express";

const getCompletions = async (req: Request, res: Response) => {
  try {
    console.log(req.body.message);
    const Bard = await import("bard-ai");
    await Bard.init(
      "ZAimvVpzJ326bddqrv_DBDNMGdtJQUvPEoVNJZ2GtDe2FXgRxQwcYMf7qKzq3K6llmsmbA."
    );
    const completion = await Bard.askAI(req.body.message);
    console.log(completion);

    res.status(200).json({ message: completion });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getCompletions };
