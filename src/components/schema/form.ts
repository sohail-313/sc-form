import { z } from "zod";

export const formSchema = z.object({
  troubleWithSchoolwork: z.boolean(),
  helpSources: z.array(z.string()),
  helpSourcesOther: z.string().optional(),
  satisfactionWithHelp: z.enum([
    "very-satisfied",
    "satisfied",
    "It's okay",
    "unsatisfied",
    "very-unsatisfied",
  ]),
  hardTimeFindingHelp: z.boolean(),
  frequencyOfFindingAnswer: z.enum(["A lot", "Sometimes", "Rarely", "Never"]),
  gaveUpOnProject: z.boolean(),
  interestedInPlatform: z.boolean(),
  importantFeatures: z.string(),
  quickHelpWithRewards: z.enum(["Yes, definitely", "Not Sure", "No"]),
  additionalComments: z.string(),
  
});
