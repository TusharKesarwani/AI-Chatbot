exports.handleDoubtEscalation = (req, res) => {
    try {
      // Here you can implement the logic to handle the doubt escalation
      // For example, forwarding the user query to the support team
      res.json({
        response:
          "Your query has been forwarded to our support team for further assistance.",
      });
    } catch (error) {
      console.error("Error handling doubt escalation:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  