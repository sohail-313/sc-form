"use client";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import React, { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Button } from "../ui/button";
import { FramerWrapper } from "../framer-wrapper";

export const Form = () => {
  const { register, handleSubmit } = useForm();
  const [isExploding, setIsExploding] = React.useState(false);
  const onSubmit = (data: any) => {
    console.log(data);
    setIsExploding(true);
  };
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isExploding && <Fireworks autorun={{ speed: 3 }} />}
      <div className="fixed top-0 w-full h-2 z-50 border-white/10 bg-[rgba(218,197,167,.05)] backdrop-blur-[12px] opacity-0 animate-fade-in [--animation-delay:1000ms] [--translate-y:-1rem]">
        <Progress value={scrollProgress} />
      </div>
      <FramerWrapper>
        <div className="max-w-3xl mx-auto px-5 md:px-8 m-[80px] lg:mb-0 py-[100px] flex flex-col gap-5">
          <h1 className="text-3xl text-[#48e0e4] italic opacity-0 animate-fade-in [--animation-delay:600ms] [--translate-y:-1rem]">
            Help Us Shape the Future of Student Support: Take Our Survey
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-5 opacity-0 animate-fade-in [--animation-delay:800ms] [--translate-y:-1rem]"
          >
            <div>
              <label htmlFor="troubleWithSchoolwork">
                1. Have you ever faced difficulties while learning or working on
                projects, like assignments or coding?
              </label>
              <br />
              <div className="px-5">
                <input
                  type="radio"
                  id="troubleYes"
                  {...register("troubleWithSchoolwork", { required: true })}
                  value="yes"
                />
                <label htmlFor="troubleYes">Yes</label>
                <input
                  type="radio"
                  id="troubleNo"
                  {...register("troubleWithSchoolwork", { required: true })}
                  value="no"
                />
                <label htmlFor="troubleNo">No</label>
              </div>
            </div>
            <div>
              <label htmlFor="helpSources">
                2. When you get stuck, where do you usually go for help? (Pick
                all that fit)
              </label>
              <br />
              <div className="px-5">
                <input
                  type="checkbox"
                  id="friendsOrClassmates"
                  {...register("helpSources.friendsOrClassmates")}
                />
                <label htmlFor="friendsOrClassmates">
                  Asking friends or classmates
                </label>
                <br />
                <input
                  type="checkbox"
                  id="onlineSearch"
                  {...register("helpSources.onlineSearch")}
                />
                <label htmlFor="onlineSearch">
                  Searching online (like Google, Quora, Stack Overflow, etc.)
                </label>
                <br />
                <input
                  type="checkbox"
                  id="youtubeTutorials"
                  {...register("helpSources.youtubeTutorials")}
                />
                <label htmlFor="youtubeTutorials">
                  Watching tutorials on YouTube
                </label>
                <br />
                <input
                  type="checkbox"
                  id="onlineForums"
                  {...register("helpSources.onlineForums")}
                />
                <label htmlFor="onlineForums">
                  Checking out forums or groups online
                </label>
                <br />
                <input
                  type="checkbox"
                  id="other"
                  {...register("helpSources.other")}
                />
                <label htmlFor="other">Other (please specify)</label>
                <br />
                <Input
                  type="text"
                  id="otherSpecify"
                  {...register("helpSources.otherSpecify")}
                  placeholder="Please specify"
                />
              </div>
            </div>
            <div>
              <label htmlFor="satisfactionWithHelp">
                3. Are you happy with the help you find when you're stuck?
              </label>
              <br />
              <div className="px-5">
                <select
                  id="satisfactionWithHelp"
                  {...register("satisfactionWithHelp", { required: true })}
                >
                  <option value="veryHappy">Very happy</option>
                  <option value="kindOfHappy">Kind of happy</option>
                  <option value="okay">It's okay</option>
                  <option value="notReallyHappy">Not really happy</option>
                  <option value="notHappyAtAll">Not happy at all</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="hardTimeFindingHelp">
                4. Ever had a hard time finding the right help online?
              </label>
              <br />
              <div className="px-5">
                <input
                  type="radio"
                  id="hardTimeYes"
                  {...register("hardTimeFindingHelp", { required: true })}
                  value="yes"
                />
                <label htmlFor="hardTimeYes">Yes</label>
                <input
                  type="radio"
                  id="hardTimeNo"
                  {...register("hardTimeFindingHelp", { required: true })}
                  value="no"
                />
                <label htmlFor="hardTimeNo">No</label>
              </div>
            </div>
            <div>
              <label htmlFor="problemFrequency">
                5. How often do you have problems where you can't find a good
                answer online?
              </label>
              <br />
              <div className="px-5">
                <select
                  id="problemFrequency"
                  {...register("problemFrequency", { required: true })}
                >
                  <option value="aLot">A lot</option>
                  <option value="sometimes">Sometimes</option>
                  <option value="rarely">Rarely</option>
                  <option value="never">Never</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="givenUpOnProject">
                6. Ever given up on a project or assignment because you couldn't
                find help?
              </label>
              <br />
              <div className="px-5">
                <input
                  type="radio"
                  id="givenUpYes"
                  {...register("givenUpOnProject", { required: true })}
                  value="yes"
                />
                <label htmlFor="givenUpYes">Yes</label>
                <input
                  type="radio"
                  id="givenUpNo"
                  {...register("givenUpOnProject", { required: true })}
                  value="no"
                />
                <label htmlFor="givenUpNo">No</label>
              </div>
            </div>
            <div>
              <label htmlFor="interestedInPlatform">
                7. Would you be interested in a platform that connects you with
                people who can help to solve such blockers?
              </label>
              <br />
              <div className="px-5">
                <input
                  type="radio"
                  id="interestedYes"
                  {...register("interestedInPlatform", { required: true })}
                  value="yes"
                />
                <label htmlFor="interestedYes">Yes</label>
                <input
                  type="radio"
                  id="interestedNo"
                  {...register("interestedInPlatform", { required: true })}
                  value="no"
                />
                <label htmlFor="interestedNo">No</label>
              </div>
            </div>
            <div>
              <label htmlFor="importantPlatformFunction">
                8. What's the most important thing that this platform should do?
              </label>
              <br />
              <div className="px-5">
                <Input
                  type="text"
                  id="importantPlatformFunction"
                  {...register("importantPlatformFunction", { required: true })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="wouldUseQuickHelpPlatform">
                9. Would you use a platform that gives quick help, and people
                who help out get rewards for being fast?
              </label>
              <br />
              <div className="px-5">
                <select
                  id="wouldUseQuickHelpPlatform"
                  {...register("wouldUseQuickHelpPlatform", { required: true })}
                >
                  <option value="definitelyYes">Yes, definitely</option>
                  <option value="yes">Yes</option>
                  <option value="notSure">Not sure</option>
                  <option value="no">No</option>
                  <option value="definitelyNo">No, definitely not</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="additionalComments">
                10. Is there anything else you'd like to share about getting
                help or your thoughts on this platform idea??
              </label>
              <br />
              <div className="px-5">
                <Textarea
                  id="additionalComments"
                  {...register("additionalComments", { required: true })}
                />
              </div>
            </div>
            <Button type="submit" variant="link" className="mx-5">
              SUBMIT
            </Button>
          </form>
        </div>
      </FramerWrapper>
    </>
  );
};
