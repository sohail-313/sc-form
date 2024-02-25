<FormProvider {...form}>
  <form onSubmit={onSubmit}>
    {/* Trouble with Schoolwork */}
    <FormLabel htmlFor="troubleWithSchoolwork">Have you ever had trouble with schoolwork or projects, like assignments or reports?</FormLabel>
    <RadioGroup
      id="troubleWithSchoolwork"
      name="troubleWithSchoolwork"
      register={register}
      options={[
        { label: 'Yes', value: true },
        { label: 'No', value: false }
      ]}
    />
    {errors.troubleWithSchoolwork && <span role="alert">This field is required</span>}
    
    {/* Help Sources */}
    <FormLabel>When you get stuck, where do you usually go for help? Pick all that fit:</FormLabel>
    <RadioGroupItem
      id="askingFriends"
      name="helpSources"
      label="Asking friends or classmates"
      register={register}
      value="askingFriends"
    />
    <RadioGroupItem
      id="searchingOnline"
      name="helpSources"
      label="Searching online (like Google)"
      register={register}
      value="searchingOnline"
    />
    <RadioGroupItem
      id="watchingTutorials"
      name="helpSources"
      label="Watching tutorials on YouTube"
      register={register}
      value="watchingTutorials"
    />
    <RadioGroupItem
      id="checkingForums"
      name="helpSources"
      label="Checking out forums or groups online"
      register={register}
      value="checkingForums"
    />
    <RadioGroupItem
      id="otherHelpSources"
      name="helpSources"
      label="Other"
      register={register}
      value="otherHelpSources"
    />
    {errors.helpSources && <span role="alert">Please select at least one help source</span>}
    
    {/* Help Sources Other */}
    {form.watch("helpSources").includes("otherHelpSources") && (
      <>
        <label htmlFor="helpSourcesOther">Please specify other help sources:</label>
        <input type="text" id="helpSourcesOther" {...register("helpSourcesOther")} />
        {errors.helpSourcesOther && <span role="alert">{errors.helpSourcesOther.message}</span>}
      </>
    )}

    {/* Satisfaction with Help */}
    <FormLabel htmlFor="satisfactionWithHelp">Are you happy with the help you find when you're stuck?</FormLabel>
    <RadioGroup
      id="satisfactionWithHelp"
      name="satisfactionWithHelp"
      register={register}
      options={[
        { label: 'Very happy', value: 'very-satisfied' },
        { label: 'Kind of happy', value: 'satisfied' },
        { label: 'It\'s okay', value: 'It\'s okay' },
        { label: 'Not really happy', value: 'unsatisfied' },
        { label: 'Not happy at all', value: 'very-unsatisfied' }
      ]}
    />
    {errors.satisfactionWithHelp && <span role="alert">This field is required</span>}

    {/* Add other fields similarly */}

    {/* Submit Button */}
    <button type="submit" disabled={isSubmitting}>Submit</button>
  </form>
</FormProvider>
