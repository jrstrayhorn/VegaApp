using System.Linq;
using VegaApp.API.Models;

namespace VegaApp.API.Data
{
    public class Seed
    {
        public static void SeedValues(DataContext context)
        {
            if (!context.Values.Any())
            {
                context.Values.Add(new Value
                {
                    Name = "Seed 1"
                });
                context.Values.Add(new Value
                {
                    Name = "Seed 2"
                });
                context.Values.Add(new Value
                {
                    Name = "Seed 3"
                });
                context.Values.Add(new Value
                {
                    Name = "Seed 4"
                });
                context.SaveChanges();
            }
        }
    }
}