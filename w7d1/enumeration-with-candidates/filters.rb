# In this file we define the methods to help filter out candidates
# This way, we keep these methods separated from other potential parts of the program
require './candidates'


def find(id)
  # Your code Here
  @candidates.find do |candidate| 
  candidate[:id] == id
  end
end

def experienced?(candidate)
  # Your code Here
  candidate[:years_of_experience] >= 2
end

def qualified_candidates(candidates)
  # Your code Here
  x = @candidates.find_all { |candidate| candidate[:years_of_experience] > 1 && candidate[:github_points] >= 100 && candidate[:age] > 17 }
  y = x.find_all { |candidate| candidate[:languages].include? 'Ruby' || "Python" }
  z = y.find_all { |candidate| candidate[:date_applied] > 15}
end

# More methods will go below

def ordered_by_qualifications(candidates)
  # candidates.sort { |a,b| (a.years_of_experience == b.years_of_experience) ? a.github_points <=> b.github_points : a.years_of_experience <=> b.years_of_experience }
  @candidates.sort do |b, a|
    comp = (a[:years_of_experience] <=> b[:years_of_experience])
    if comp.zero?
    	comp = a[:github_points] <=> b[:github_points]
    end
    comp
 	end
 end